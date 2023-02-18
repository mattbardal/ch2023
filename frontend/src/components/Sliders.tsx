export default function Sliders() {

  const tempData = [
    'slider1',
    'slider2',
    'slider3'
  ]

  return (
    <div>
      {
        tempData.map((d, index) => (
          <p key={index}>{d}</p>
        ))
      }
    </div>
  )
}
