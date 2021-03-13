import { toRefs, reactive } from "vue";
import PouchDB from "pouchdb";
import { v4 as uuid } from "uuid";

const contexts = new PouchDB("contexts");

export interface Context {
  _id: string;
  _rev: string;
  name?: string;
}

const state = reactive<{ contexts: null | string[] }>({
  contexts: null,
});

export default () => {
  const addContext = async (_name: string) => {
    let id = "";
    
    const context: Context = {
      _id: uuid(),
      _rev: "",
      name: _name
    }

    await contexts.put(context)
    .then((response) => {
      id = response.id;
    })
    .catch((err) => {
      console.error(err);
    });

    return id;
  };

  const getAllContexts = async () => {
    contexts.allDocs()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const getContext = async (_id: string) => {
    let context: Context = {
      _id: "",
      _rev: ""
    };

    await contexts.get(_id)
    .then((result) => {
      context = result as Context;
    })
    .catch((err) => {
      console.error(err);
    });

    return context;
  };

  const updateContext = (_context: Context) => {
    contexts.put(_context);
  };

  const removeContext = async (_context: Context) => {
    let removed = false;

    await contexts.remove(_context)
    .then((result) => {
      removed = result.ok;
    })
    .catch((err) => {
      console.error(err);
    });

    return removed;
  };

  return {
    ...toRefs(state),
    addContext,
    getAllContexts,
    getContext,
    updateContext,
    removeContext,
  }
}