import useTodays, { Context } from "@/hooks/todays-service";

let contextId = "";

describe("todays-service hook", () => {
  const { addContext, getContext, removeContext, updateContext } = useTodays();
  let context: Context = {
    _id: "",
    _rev: ""
  };

  it("adds new context", async () => {
    contextId = await addContext("Test Context");
    context = await getContext(contextId);
    
    expect(context.name).toMatch(`Test Context`);
  });

  it("updates context", async () => {
    context.name = "New Name";
    updateContext(context);
    context = await getContext(contextId);
    
    expect(context.name).toMatch(`New Name`);
  });

  it("removes context", async () => {
    context = await getContext(contextId);
    const result = await removeContext(context);

    expect(result).toBeTruthy();
  });
});
