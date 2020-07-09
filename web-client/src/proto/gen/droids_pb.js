// source: droids.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Droid', null, global);
goog.exportSymbol('proto.DroidsReply', null, global);
goog.exportSymbol('proto.DroidsRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DroidsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DroidsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DroidsRequest.displayName = 'proto.DroidsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DroidsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DroidsReply.repeatedFields_, null);
};
goog.inherits(proto.DroidsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DroidsReply.displayName = 'proto.DroidsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Droid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Droid.repeatedFields_, null);
};
goog.inherits(proto.Droid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Droid.displayName = 'proto.Droid';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DroidsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DroidsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DroidsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DroidsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DroidsRequest}
 */
proto.DroidsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DroidsRequest;
  return proto.DroidsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DroidsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DroidsRequest}
 */
proto.DroidsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DroidsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DroidsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DroidsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DroidsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DroidsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DroidsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.DroidsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DroidsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DroidsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    droidsList: jspb.Message.toObjectList(msg.getDroidsList(),
    proto.Droid.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DroidsReply}
 */
proto.DroidsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DroidsReply;
  return proto.DroidsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DroidsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DroidsReply}
 */
proto.DroidsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Droid;
      reader.readMessage(value,proto.Droid.deserializeBinaryFromReader);
      msg.addDroids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DroidsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DroidsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DroidsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DroidsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDroidsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Droid.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Droid droids = 1;
 * @return {!Array<!proto.Droid>}
 */
proto.DroidsReply.prototype.getDroidsList = function() {
  return /** @type{!Array<!proto.Droid>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Droid, 1));
};


/**
 * @param {!Array<!proto.Droid>} value
 * @return {!proto.DroidsReply} returns this
*/
proto.DroidsReply.prototype.setDroidsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Droid=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Droid}
 */
proto.DroidsReply.prototype.addDroids = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Droid, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.DroidsReply} returns this
 */
proto.DroidsReply.prototype.clearDroidsList = function() {
  return this.setDroidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Droid.repeatedFields_ = [1,3,7,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Droid.prototype.toObject = function(opt_includeInstance) {
  return proto.Droid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Droid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Droid.toObject = function(includeInstance, msg) {
  var f, obj = {
    armamentList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    pb_class: jspb.Message.getFieldWithDefault(msg, 2, ""),
    equipmentList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    height: jspb.Message.getFieldWithDefault(msg, 4, 0),
    manufacturer: jspb.Message.getFieldWithDefault(msg, 5, ""),
    model: jspb.Message.getFieldWithDefault(msg, 6, ""),
    platingColorList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    price: jspb.Message.getFieldWithDefault(msg, 8, 0),
    sensorColorList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Droid}
 */
proto.Droid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Droid;
  return proto.Droid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Droid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Droid}
 */
proto.Droid.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addArmament(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClass(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addEquipment(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setManufacturer(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addPlatingColor(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addSensorColor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Droid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Droid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Droid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Droid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArmamentList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getClass();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEquipmentList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getManufacturer();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPlatingColorList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getSensorColorList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * repeated string armament = 1;
 * @return {!Array<string>}
 */
proto.Droid.prototype.getArmamentList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.setArmamentList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.addArmament = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.clearArmamentList = function() {
  return this.setArmamentList([]);
};


/**
 * optional string class = 2;
 * @return {string}
 */
proto.Droid.prototype.getClass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.setClass = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string equipment = 3;
 * @return {!Array<string>}
 */
proto.Droid.prototype.getEquipmentList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.setEquipmentList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.addEquipment = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.clearEquipmentList = function() {
  return this.setEquipmentList([]);
};


/**
 * optional int32 height = 4;
 * @return {number}
 */
proto.Droid.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string manufacturer = 5;
 * @return {string}
 */
proto.Droid.prototype.getManufacturer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.setManufacturer = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string model = 6;
 * @return {string}
 */
proto.Droid.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.setModel = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string plating_color = 7;
 * @return {!Array<string>}
 */
proto.Droid.prototype.getPlatingColorList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.setPlatingColorList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.addPlatingColor = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.clearPlatingColorList = function() {
  return this.setPlatingColorList([]);
};


/**
 * optional int32 price = 8;
 * @return {number}
 */
proto.Droid.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated string sensor_color = 9;
 * @return {!Array<string>}
 */
proto.Droid.prototype.getSensorColorList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.setSensorColorList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.addSensorColor = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Droid} returns this
 */
proto.Droid.prototype.clearSensorColorList = function() {
  return this.setSensorColorList([]);
};


goog.object.extend(exports, proto);
