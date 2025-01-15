import React from 'react';

const Card = ({ topic, file_path, subject, author, likes }) => {
  console.log(topic, file_path, subject, author, likes); // Debugging props
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 bg-white">
      {/* Card Header */}
      <div className="px-6 py-4 border-b border-gray-300 flex justify-between items-center">
        <span className="font-bold text-lg text-gray-800">{topic}</span>
        <span className="text-gray-500 text-sm">{subject}</span>
      </div>

      {/* Card Content */}
      <div className="px-6 py-4">
        <p className="text-gray-700 text-sm">
          <strong>Author:</strong> {author}
        </p>
        <p className="text-gray-500 text-sm">
          <strong>Likes:</strong> {likes}
        </p>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 border-t border-gray-300 flex items-center justify-between">
        <a
          href={file_path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Download
        </a>
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Preview
        </button>
      </div>
    </div>
  );
};

export default Card;
