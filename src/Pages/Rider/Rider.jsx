import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { UseAuth } from "../../Hooks/UseAuth";
import { useLoaderData } from "react-router";
import rider_photo from "../../assets/agent-pending.png";
import Swal from "sweetalert2";

export const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenter = useLoaderData();
  const regionsDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const riderRegion = useWatch({ control, name: "region" });

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:
            "Your application has been submitted. We will reach to you in 145 days",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  return (
    <div className="px-12.5 py-10 my-10 bg-white rounded-2xl">
      <h2 className="text-4xl font-extrabold">Be a rider</h2>
      <p className="max-w-150 mt-2.5">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <form
        onSubmit={handleSubmit(handleRiderApplication)}
        className="mt-12 text-black"
      >
        {/* Two column */}
        <div className="grid grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Rider Info */}
          <fieldset className="fieldset">
            <h4 class="text-2xl font-bold">Rider Details</h4>
            {/* rider name */}
            <label className="label">Rider Name</label>
            <input
              type="text"
              {...register("name")}
              defaultValue={user?.displayName}
              className="input max-w-[320px]"
              placeholder="Rider Name"
            />
            {/* Rider email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email")}
              defaultValue={user?.email}
              className="input max-w-[320px]"
              placeholder="Rider Email"
            />
            {/* Rider region */}
            <fieldset className="fieldset ">
              <legend className="fieldset-legend"> Region</legend>
              <select
                {...register("region")}
                defaultValue="Pick a Region"
                className="select"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <span className="label">Optional</span>
            </fieldset>
            {/* Rider districts */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Districts</legend>
              <select
                {...register("district")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a district</option>
                {districtsByRegion(riderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <span className="label">Optional</span>
            </fieldset>

            {/* Your address */}
            <label className="label mt-4">Your Address</label>
            <input
              type="text"
              {...register("address")}
              className="input max-w-[320px]"
              placeholder="Your Address"
            />
          </fieldset>

          {/* Receiver Info */}
          <fieldset className="fieldset">
            <h4 class="text-2xl font-bold">More Details</h4>
            {/* receiver name */}
            <label className="label">Driving License</label>
            <input
              type="text"
              {...register("license")}
              className="input max-w-[320px]"
              placeholder="Driving License"
            />
            {/* NID */}
            <label className="label">NID </label>
            <input
              type="text"
              {...register("nid")}
              className="input max-w-[320px]"
              placeholder="NID"
            />

            {/* Bike info */}
            <label className="label mt-4">BIKE</label>
            <input
              type="text"
              {...register("bike")}
              className="input max-w-[320px]"
              placeholder="Bike Info"
            />
          </fieldset>
          <div className="max-md:hidden">
            <img src={rider_photo} alt="" />
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary text-black mt-4"
        />
      </form>
    </div>
  );
};
