import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function TeamEditor() {

  const id = useParams();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

    return (
      <>
        <h2>Team Editor Page</h2>
        <div>

        </div>
      </>
    );
}

export default TeamEditor;