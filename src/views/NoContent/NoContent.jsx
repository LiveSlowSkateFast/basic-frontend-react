import React from "react";
import { EmptyState } from '@auth0/styleguide-react-components';
import {
    SignUpButton,
    LogInButton
} from "components";

const NoContent = () => (
    <EmptyState
        title="Well, this is pretty boring..."
        description="There isn't a whole lot to do here until you log in."
        iconCode="311">
        <LogInButton />
        <SignUpButton />
    </EmptyState>
);

export default NoContent;