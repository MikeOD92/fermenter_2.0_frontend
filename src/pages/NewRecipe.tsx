import React, { useEffect, useState, useRef, SyntheticEvent } from "react";
import axios from "axios";
import { UserState } from "../types/userstate";
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function NewRecipe() {
  const user: UserState = useTypedSelector((state) => state.user);

  const title = useRef<HTMLInputElement>(null);
  const catagory = useRef<HTMLSelectElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const ingredients = useRef<HTMLTextAreaElement>(null);
  const method = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("submission");
  };
  return (
    <div>
      <h1>New Recipe</h1>
      <form
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="block text-gray-700 text-md mb-2 shadow-md w-full md:w-1/2"
            type="string"
            placeholder="Recipe Title"
            required
            ref={title}
          />
        </div>
        <div>
          <select
            className="block text-gray-700 text-md mb-2 shadow-md w-full md:w-1/2"
            placeholder="Catagory"
            ref={catagory}
          >
            <option>Beer</option>
            <option>Wine</option>
            <option>Lightly Fermented Beverage</option>
            <option>Lactic Acid Fermentation </option>
            <option>Cheese</option>
            <option>Vinegar</option>
            <option>Honey Blanche</option>
            <option>Shoyu</option>
          </select>
        </div>

        <textarea
          className="block text-gray-700 text-md mb-2 shadow-md"
          style={{ whiteSpace: "pre-wrap" }}
          rows={10}
          placeholder="Description"
          ref={description}
        />
        <textarea
          className="block text-gray-700 text-md mb-2 shadow-md"
          style={{ whiteSpace: "pre-wrap" }}
          rows={10}
          placeholder="Ingredients"
          ref={ingredients}
        />
        <textarea
          className="block text-gray-700 text-md mb-2 shadow-md"
          style={{ whiteSpace: "pre-wrap" }}
          rows={10}
          placeholder="Method"
          ref={method}
        />
        <button type="submit" className="bg-black text-white rounded-full px-5">
          Create
        </button>
      </form>
    </div>
  );
}
