
import { Navbar,Form, FormControl } from 'react-bootstrap';

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" clasaName="navigation">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar>
    </>
  );
}
