using Grpc.Core;
using GrpcNETService.Generated;
using System.Threading.Tasks;
using static GrpcNETService.Generated.DroidService;

namespace GrpcNETService
{
    public class DroidService : DroidServiceBase
    {
        public override Task<DroidsReply> GetAll(DroidsRequest request, ServerCallContext context)
        {
            var droids = new Droid[] { };

            var reply = new DroidsReply();
            reply.Droids.AddRange(droids);

            return Task.FromResult(reply);
        }
    }
}
