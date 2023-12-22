import { GiSaveArrow } from "react-icons/gi";
import * as Style from "./index.styled";

type TorrentProps = {
  href: string;
  quality: string;
  type: string;
  size: string;
};
const Torrent: React.FC<TorrentProps> = (props) => {
  return (
    <Style.Torrent href={props.href}>
      <Style.Content>
        <Style.Icon>
          <GiSaveArrow />
        </Style.Icon>
        <Style.Text>{props.quality}</Style.Text>
      </Style.Content>
      <Style.Content>
        <Style.Size>{props.size}</Style.Size>
      </Style.Content>
    </Style.Torrent>
  );
};
export default Torrent;
