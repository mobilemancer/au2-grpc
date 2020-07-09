using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;
using GrpcNETService.Generated;
using System.Collections.Generic;
using System.IO;

namespace GrpcNETService
{
    internal class FakeDroidStore
    {
        internal static List<Droid> GetAllDroids()
        {
            var jsonString = File.ReadAllText("Models/store.json");
            List<Droid> droids = new List<Droid>();
            var parser = new JsonParser(new JsonParser.Settings(1));
            var droidReply = parser.Parse<ListValue>(jsonString);
            foreach (var l in droidReply.Values)
            {
                droids.Add(Droid.Parser.ParseJson(l.ToString()));
            }

            return droids;
        }

    }
}
