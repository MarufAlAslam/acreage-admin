import React from "react";
import { useLoaderData } from "react-router-dom";

const SurveyDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl">Personal Details</h1>
      <hr className="my-5" />

      <div className="flex gap-5 flex-col">
        <div>
          <p className="font-bold">Name</p>
          <p>{data.fullName}</p>
        </div>
        <div>
          <p className="font-bold">Email</p>
          <p>{data.email}</p>
        </div>
        <div>
          <p className="font-bold">Phone</p>
          <p>{data.phone}</p>
        </div>
        <div>
          <p className="font-bold">Property Address</p>
          <p>{data.address}</p>
        </div>
      </div>

      <h1 className="text-2xl mt-10">Survey Answers</h1>
      <hr className="my-5" />
      <div className="flex gap-5 flex-col">
        <div>
          <p className="font-bold">
            1. Which Types of Land or Property do you own and how long have you
            owned it?
          </p>
          <p>{data.type}</p>
        </div>
        <div>
          <p className="font-bold">2. Do you have a rental property?</p>
          <p>{data.rental}</p>
        </div>
        <div>
          <p className="font-bold">
            3. Have you considered renovating or redeveloping your property?
          </p>
          <p>{data.redevelop}</p>
        </div>
        <div>
          <p className="font-bold">
            4. What are your primary reasons for considering property
            renovations?
          </p>
          {
            <ul>
              {/* check if primary reason is array or not */}
              {Array.isArray(data.primaryReason) ? (
                data.primaryReason.map((reason, index) => (
                  <li key={index}>
                    {index + 1}. {reason}
                  </li>
                ))
              ) : (
                <li>{data.primaryReason}</li>
              )}
            </ul>
          }
        </div>
        <div>
          <p className="font-bold">
            5. Why would you want to redevelop the property that you live in?
            (provide options)
          </p>
          <p>{data.why}</p>
        </div>
        <div>
          <p className="font-bold">
            6. What are your limitations regarding redevelopment of your
            property?
          </p>
          <p>{data.limitations}</p>
        </div>
        <div>
          <p className="font-bold">
            7. Would you be interested in consulting services for your property
            redevelopment?
          </p>
          <p>{data.interest}</p>
        </div>
        <div>
          <p className="font-bold">
            8. What roles does costs play in your decision to renovate or
            redevelop your property?
          </p>
          <p>{data.decision}</p>
        </div>
        <div>
          <p className="font-bold">9. Do you have a budget?</p>
          <p>{data.budget}</p>
        </div>
        <div>
          <p className="font-bold">
            10. Do you know the initial steps of renovating or redeveloping your
            property?
          </p>
          <p>{data.step}</p>
        </div>
        <div>
          <p className="font-bold">11. What is the scope of your renovation?</p>
          <p>{data.scope}</p>
        </div>
        <div>
          <p className="font-bold">
            12. Do you have a preferred timeline for renovations?
          </p>
          <p>{data.renovation}</p>
        </div>
        <div>
          <p className="font-bold">
            13. What are your perceived challenges regarding multifamily
            development? (provide options)
          </p>
          {/* <p>{data.challenges}</p> */}
          {
            <ul>
              {/* check if primary reason is array or not */}
              {Array.isArray(data.challenges) ? (
                data.challenges.map((challenge, index) => (
                  <li key={index}>
                    {index + 1}. {challenge}
                  </li>
                ))
              ) : (
                <li>{data.challenges}</li>
              )}
            </ul>
          }
        </div>
        <div>
          <p className="font-bold">
            14. What are you least concerned about regarding renovating or
            redeveloping your property? (provide options)
          </p>
          <p>{data.revelopingProperty}</p>
        </div>
        <div>
          <p className="font-bold">
            15. Is there any additional information you’d like to act on?
          </p>
          <p>{data.additional}</p>
        </div>
        <div>
          <p className="font-bold">
            16. Are you interested in incorporating energy-efficient or
            sustainable features into the renovations?
          </p>
          <p>{data.features}</p>
        </div>
        <div>
          <p className="font-bold">
            17. Have you considered adding a rental or for-sale addition on your
            property?
          </p>
          <p>{data.forSale}</p>
        </div>
        <div>
          <p className="font-bold">
            18. How will you finance the renovation or property upgrades?
            (provide options)
          </p>
          <p>{data.propertyUpgrade}</p>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetails;
