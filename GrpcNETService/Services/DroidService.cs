using Grpc.Core;
using GrpcNETService.Generated;
using System.Collections.Generic;
using System.Threading.Tasks;
using static GrpcNETService.Generated.DroidService;

namespace GrpcNETService
{
    public class DroidService : DroidServiceBase
    {
        public List<Droid> DroidStore { get; set; }
        public DroidService(List<Droid> droids)
        {
            DroidStore = droids;
        }

        public override Task<DroidsReply> GetAll(DroidsRequest request, ServerCallContext context)
        {
            var reply = new DroidsReply();
            reply.Droids.AddRange(DroidStore);
            return Task.FromResult(reply);
        }
    }
}
