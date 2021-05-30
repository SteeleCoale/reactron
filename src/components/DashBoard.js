import React from 'react';
import ComponentTree from './ComponentTree.jsx';
import Visualizer from './Visualizer.jsx';
import FileList from './FileList.jsx';
import IndividualComponent from './IndividualComponent.jsx';
import Blurb from './Blurb';

export default function DashBoard() {
  return (
    <div className="DashBoard">
      <IndividualComponent />
      <Visualizer />
      <ComponentTree />
      <Blurb />
    </div>
  );
}
