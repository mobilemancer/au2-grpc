import * as jspb from "google-protobuf"

export class DroidsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DroidsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DroidsRequest): DroidsRequest.AsObject;
  static serializeBinaryToWriter(message: DroidsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DroidsRequest;
  static deserializeBinaryFromReader(message: DroidsRequest, reader: jspb.BinaryReader): DroidsRequest;
}

export namespace DroidsRequest {
  export type AsObject = {
  }
}

export class DroidsReply extends jspb.Message {
  getDroidsList(): Array<Droid>;
  setDroidsList(value: Array<Droid>): DroidsReply;
  clearDroidsList(): DroidsReply;
  addDroids(value?: Droid, index?: number): Droid;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DroidsReply.AsObject;
  static toObject(includeInstance: boolean, msg: DroidsReply): DroidsReply.AsObject;
  static serializeBinaryToWriter(message: DroidsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DroidsReply;
  static deserializeBinaryFromReader(message: DroidsReply, reader: jspb.BinaryReader): DroidsReply;
}

export namespace DroidsReply {
  export type AsObject = {
    droidsList: Array<Droid.AsObject>,
  }
}

export class Droid extends jspb.Message {
  getArmamentList(): Array<string>;
  setArmamentList(value: Array<string>): Droid;
  clearArmamentList(): Droid;
  addArmament(value: string, index?: number): Droid;

  getClass(): string;
  setClass(value: string): Droid;

  getEquipmentList(): Array<string>;
  setEquipmentList(value: Array<string>): Droid;
  clearEquipmentList(): Droid;
  addEquipment(value: string, index?: number): Droid;

  getHeight(): number;
  setHeight(value: number): Droid;

  getManufacturer(): string;
  setManufacturer(value: string): Droid;

  getModel(): string;
  setModel(value: string): Droid;

  getPlatingColorList(): Array<string>;
  setPlatingColorList(value: Array<string>): Droid;
  clearPlatingColorList(): Droid;
  addPlatingColor(value: string, index?: number): Droid;

  getPrice(): number;
  setPrice(value: number): Droid;

  getSensorColorList(): Array<string>;
  setSensorColorList(value: Array<string>): Droid;
  clearSensorColorList(): Droid;
  addSensorColor(value: string, index?: number): Droid;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Droid.AsObject;
  static toObject(includeInstance: boolean, msg: Droid): Droid.AsObject;
  static serializeBinaryToWriter(message: Droid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Droid;
  static deserializeBinaryFromReader(message: Droid, reader: jspb.BinaryReader): Droid;
}

export namespace Droid {
  export type AsObject = {
    armamentList: Array<string>,
    pb_class: string,
    equipmentList: Array<string>,
    height: number,
    manufacturer: string,
    model: string,
    platingColorList: Array<string>,
    price: number,
    sensorColorList: Array<string>,
  }
}

