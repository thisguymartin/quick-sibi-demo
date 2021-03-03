

const statusMapper = (event) => {
  console.log("statusMapper", event)
  const statuses = event.map(i => ({ SampleMaterial: i.sample_material, Material: i.material_usage }))
  return statuses
}


exports.handler = async function queue(event) {
  const body = JSON.parse(event.Records[0].body)
  let status = statusMapper(body);
  console.log("Status we will do something", status)
  return
}
