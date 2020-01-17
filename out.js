module.exports = {
  "rid": "hello_world",
  "meta": {
    "name": "Hello World",
    "description": "\nA first ruleset for the Quickstart\n",
    "author": "Phil Windley",
    "logging": true,
    "shares": ["hello"]
  },
  "global": async function (ctx) {
    ctx.scope.set("hello", ctx.mkFunction(["obj"], async function (ctx, args) {
      ctx.scope.set("obj", args["obj"]);
      ctx.scope.set("msg", await ctx.applyFn(ctx.scope.get("+"), ctx, [
        "Hello ",
        ctx.scope.get("obj")
      ]));
      return ctx.scope.get("msg");
    }));
  },
  "rules": {
    "hello_world": {
      "name": "hello_world",
      "select": {
        "graph": { "echo": { "hello": { "expr_0": true } } },
        "state_machine": {
          "start": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "body": async function (ctx, runAction, toPairs) {
        var fired = true;
        if (fired) {
          await runAction(ctx, void 0, "send_directive", [
            "say",
            { "something": "Hello World" }
          ], []);
        }
        if (fired)
          ctx.emit("debug", "fired");
        else
          ctx.emit("debug", "not fired");
      }
    },
    "hello_monkey": {
      "name": "hello_monkey",
      "select": {
        "graph": { "echo": { "monkey": { "expr_0": true } } },
        "state_machine": {
          "start": [[
              "expr_0",
              "end"
            ]]
        }
      },
      "body": async function (ctx, runAction, toPairs) {
        ctx.scope.set("name", await ctx.applyFn(ctx.scope.get("head"), ctx, [await ctx.applyFn(ctx.scope.get("klog"), ctx, [
            await ctx.applyFn(ctx.scope.get("defaultsTo"), ctx, [
              await ctx.applyFn(await ctx.modules.get(ctx, "event", "attr"), ctx, ["name"]),
              "Monkey"
            ]),
            "Name: "
          ])]));
        var fired = true;
        if (fired) {
          await runAction(ctx, void 0, "send_directive", [
            "say",
            {
              "something": await ctx.applyFn(ctx.scope.get("+"), ctx, [
                "Hello ",
                ctx.scope.get("name")
              ])
            }
          ], []);
        }
        if (fired)
          ctx.emit("debug", "fired");
        else
          ctx.emit("debug", "not fired");
      }
    }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbXX0=
