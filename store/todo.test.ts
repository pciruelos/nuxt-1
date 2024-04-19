import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
} from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodoStore } from "./todo";

beforeAll(() => {
  setActivePinia(createPinia());
});

describe("useTodoStore", () => {
  let store: ReturnType<typeof useTodoStore>;

  beforeEach(() => {
    store = useTodoStore();
  });

  afterEach(() => {
    store.$reset();
  });

  test("create a store", () => {
    expect(store).toBeDefined();
  });

  test("initializes with empty items", () => {
    expect(store.items).toStrictEqual([]);
  });

  test("creates a task", () => {
    store.add({ title: "test my code!" });
    expect(store.items[0]).toBeDefined();
    expect(store.items[0].title).toBe("test my code!");
  });

  test("test by id", () => {
    store.add({title: "test"});
    const item = store.items[0];
    const todo = store.getById(item.id)
    expect(todo).toStrictEqual(item)
  })

  test("remove", () => {
    store.add({title: "test"});
    const item = store.items[0];
    store.remove(item.id)
    expect(store.items).toStrictEqual([])
  })

  test("update done state", () => {
    store.add({title: "test"});

    const item = store.items[0];
    store.update(item.id, {done: true})

    const updatedItem = store.items[0]
    expect(updatedItem.done).toBe(true)
  })

  test("update a title", () => {
    store.add({title: "test"});

    const item = store.items[0];
    store.update(item.id, {title: "newtitle"})

    const updatedItem = store.items[0]
    expect(updatedItem.title).toBe("newtitle")
  })

  test("get ordered all todos", () => {
    const items = [
        {
            createdAt: new Date(2024,4,19)
        },
        {
            createdAt: new Date(2019,2,11)
        },
        {
            createdAt: new Date(2022,6,9)
        },
    ]
    //@ts-ignore
    store.items = items;
    const orderedTodos = store.getOrderedTodos
    expect(orderedTodos[0].createdAt.getFullYear()).toBe(2019)
    expect(orderedTodos[1].createdAt.getFullYear()).toBe(2022)
    expect(orderedTodos[2].createdAt.getFullYear()).toBe(2024)
    expect(store.items[0].createdAt.getFullYear()).toBe(2024)
  })
});
