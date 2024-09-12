// eslint-disable-next-line react-refresh/only-export-components
export default async function (...args) {
  const res = await fetch(...args)
  return await res.json()
}