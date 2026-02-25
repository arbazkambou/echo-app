"use client";

import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
// import { api } from "@workspace/backend/_generated/api";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.addUser)
  console.log("users", users);
  return (
    <div className="max-w-7xl">
      <Authenticated>
        <div className="flex items-center justify-center">

          <div className="flex items-center justify-center min-h-svh">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-2xl font-bold">Apps/Web</h1>
              <button onClick={() => addUser()}>Add User</button>
            </div>
            <ul>
              {users?.map((user) => (
                <li key={user._id} className="text-red-300">{user.name}</li>
              ))}
            </ul>
          </div>



          <UserButton >User</UserButton>
          <SignOutButton />
        </div>

      </Authenticated>

      <Unauthenticated>
        You must be signed in.
        <SignInButton />
      </Unauthenticated>
    </div>
  );
}

