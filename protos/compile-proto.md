# Compiling proto files

## Get the prerequisites

1. protoc
2. grpc-web

These needs to be available in the path

## Commandline compilation

For compiling the proto file `droids.proto`

1. Position in the protos directory
2. For generating js files `protoc droids.proto --js_out=import_style=commonjs:../web-client/src/proto/gen --grpc-web_out=import_style=typescript,mode=grpcwebtext:../web-client/src/proto/gen`
3. For generating c# - Use Visual Studio 2019 Preview, just building the project will compile and put the output in the _Services_ folder inside the c# project structure
