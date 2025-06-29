"use client";
import { FaUserFriends } from "react-icons/fa";

export function Friends() {
  return (
    <div className="h-full flex items-center justify-center bg-gray-50">
      <div className="text-center slide-in">
        <div className="bg-gray-100 p-4 rounded-full inline-block mb-4">
          <FaUserFriends className="h-6 w-6 text-gray-500" />
        </div>
        <h3 className="text-xl font-medium text-gray-800 mb-2">
          Friends
        </h3>
        <p className="text-gray-500 max-w-md">
          Choose a friend from the list to start chatting.
        </p>
      </div>
    </div>
  );
}
