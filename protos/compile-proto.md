# Compiling proto files

## Get the prerequisites

1. protoc
2. grpc-web

   These needs to be available in the path

## Commandline compilation

For compiling the proto file `greet.proto`

1. Position in the protos directory
2. For generating js files `protoc droids.proto --js_out=import_style=commonjs:gen/js --grpc-web_out=import_style=commonjs,mode=grpcwebtext:gen/js`
3. For generating c# - Use Visual Studio 2019 Preview
