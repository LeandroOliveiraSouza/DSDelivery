import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AsyncSelect from "react-select/async";
import { fetchLocalMapBox } from "../../api";
import { GroupBase, OptionsOrGroups } from "react-select";
import { OrderLocationdata } from "./types";

const initialPosition = {
  lat: 51.505,
  lng: -0.09,
};

type Place = {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  };
};

type Props = {
  onChangeLocation: (location: OrderLocationdata) => void;
};

const OrderLocation = ({ onChangeLocation }: Props) => {
  const [address, setAddress] = useState<Place>({
    position: initialPosition,
  });

  const loadOptions: (
    inputValue: string,
    callback: (options: OptionsOrGroups<Place, GroupBase<Place>>) => void
  ) => void | Promise<OptionsOrGroups<Place, GroupBase<Place>>> = async (
    inputValue: string,
    callback: (options: OptionsOrGroups<Place, GroupBase<Place>>) => void
  ) => {
    try {
      const response = await fetchLocalMapBox(inputValue);

      const options = response.data.features.map((item: any) => ({
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0],
        },
      }));

      callback(options);
      return options; // Retorna as opções mapeadas
    } catch (error) {
      // Lida com erros, se necessário
      throw error; // Você pode lançar o erro ou fazer o tratamento adequado aqui
    }
  };

  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label!,
    });
  };

  return (
    <div className="order-location-container">
      <div className="order-location-content">
        <h3 className="order-location-title">
          Selecione onde o pedido deve ser entregue:
        </h3>
        <div className="filter-container">
          <AsyncSelect
            placeholder="Digite um endereço para entrega do pedido"
            className="filter"
            loadOptions={loadOptions}
            onChange={(value) => handleChangeSelect(value as Place)}
          />
        </div>
        <MapContainer
          center={address.position}
          zoom={13}
          key={address.position.lat}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={address.position}>
            <Popup>{address.label}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default OrderLocation;
