using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace SignalR_Test
{
    public class MyHub : Hub
    {
        public void Announce(string message)
        {
            Clients.Others.otherusers(message);
            Clients.Caller.caller("You: "+message);



        }
    }
}