const code = `
import { ListGroup } from "pol-ui";
const ListGroupComponent = () => {
  return (
    <ListGroup>
    <ListItem active icon={TbUser}>
    Profile
  </ListItem>
  <ListItem icon={TbSettings}>Settings</ListItem>
  <ListItem icon={TbAt}>Messages</ListItem>
  <ListItem icon={TbDownload}>Download</ListItem>
    </ListGroup>
  );
};
export default ListGroupComponent;
`;
export default code;
