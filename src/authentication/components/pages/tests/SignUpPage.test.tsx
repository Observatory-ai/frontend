import { render } from "../../../../utils/testUtils";
import SignUpPage from "../SignUpPage";
import { screen } from "@testing-library/react";

it('test whether this actually works', ()=> {
    render(< SignUpPage />);

    screen.debug();
});