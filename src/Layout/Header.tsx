/** @format */

import ProductUpperListContainer from '../Components/ProductUpperListContainer'
import useApi from '../Hooks/Api/useApi'

const Header = () => {
  const {
    products: {data},
  } = useApi()

  return (
    <div className="w-full h-1/6 py-6 flex justify-items-center content-center bg-gray-200">
      <div className="w-full flex flex-row flex-wrap gap-3 justify-center">
        {data?.products.map(({id, name}) => (
          <ProductUpperListContainer key={id} name={name} />
        ))}
      </div>
    </div>
  )
}

export default Header
