import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function App() {
    const [categories, setCategories] = useState(["Dragon Ball"]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory categories={categories} setCategories={setCategories} />

            <ul>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ul>
        </>
    );
}

export default App;