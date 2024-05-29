export const getGlobalConfig = async () => {
  const res = await fetch('http://localhost:5000/config');
  return res.json();
};
