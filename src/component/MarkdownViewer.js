import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './MarkdownViewer.css';

function MarkdownViewer() {
  const { fileName } = useParams();
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    // Fetch the markdown content based on the file name
    fetch('/digital_team_dashboard/' + fileName)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      })
      .catch((error) => console.error(error));
  }, [fileName]);

  return (
    <div className="markdown-viewer">
      <Link to="/digital_team_dashboard/Deployment_Info" className="back-button">
        Back
      </Link>
      {markdown && <ReactMarkdown>{markdown}</ReactMarkdown>}
    </div>
  );
}

export default MarkdownViewer;
