import React from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { useContext } from "react";

import { RotasPrivadas } from "./RotasPrivadas.js";
import { RotasPublicas } from "./RotasPublicas.js";

export default function Routes() {
    const {logado} = useContext(AuthContext)

    return logado ? <RotasPrivadas /> : <RotasPublicas/>
}