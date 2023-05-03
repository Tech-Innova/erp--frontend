import { ScaleLoader } from "react-spinners"

const Loader = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <ScaleLoader color="#001BAA" />
    </div>
  )
}

export default Loader
