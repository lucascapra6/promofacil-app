import styled from 'styled-components/native'
import FastImage, {FastImageProps} from "react-native-fast-image";
interface ImageType extends FastImageProps  {
  width: number
  height: number
}
const AppImage = styled(FastImage)<ImageType>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`
export default AppImage
