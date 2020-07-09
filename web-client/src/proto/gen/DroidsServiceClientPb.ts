/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  DroidsReply,
  DroidsRequest} from './droids_pb';

export class DroidServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetAll = new grpcWeb.AbstractClientBase.MethodInfo(
    DroidsReply,
    (request: DroidsRequest) => {
      return request.serializeBinary();
    },
    DroidsReply.deserializeBinary
  );

  getAll(
    request: DroidsRequest,
    metadata: grpcWeb.Metadata | null): Promise<DroidsReply>;

  getAll(
    request: DroidsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DroidsReply) => void): grpcWeb.ClientReadableStream<DroidsReply>;

  getAll(
    request: DroidsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DroidsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/DroidService/GetAll', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/DroidService/GetAll',
    request,
    metadata || {},
    this.methodInfoGetAll);
  }

}

