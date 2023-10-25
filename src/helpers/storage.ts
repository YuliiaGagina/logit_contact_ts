const save = (key: string, value : string) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error : string | any) {
    console.error('Set state error: ', error.message);
  }
};

const load = (key :string) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error: string | any) {
    console.error('Get state error: ', error.message);
  }
};
const storage = {
  save,
  load,
};

export default storage;
