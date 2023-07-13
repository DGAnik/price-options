import React from "react";
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
  return <div className="flex gap-2 mt-2">
    <CheckBadgeIcon class="h-6 w-6 text-purple-900" />
    <p>{feature}</p>
  </div>;
};

export default Feature;
