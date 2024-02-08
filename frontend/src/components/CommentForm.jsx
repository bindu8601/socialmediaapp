import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NoProfile } from "../assets";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import Loading from "./Loading";
const CommentForm = ({ user, id, getComments, replyAt }) => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = async (data) => {};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full border-b border-[#66666645]"
    >
      <div className="w-full flex items-center gap-2 py-4">
        <img
          src={user?.profileUrl ?? NoProfile}
          alt="User Img"
          className="w-10 h-10 rounded-full object-cover"
        />
        <TextInput
          name="comment"
          styles="w-full rounded-full"
          placeholder={replyAt ? `Reply @${replyAt}` : "Comment this post"}
          register={register("comment", {
            required: "Comment can not be empty",
          })}
          error={errors.comment ? errors.comment.message : ""}
        />
      </div>
      {errMsg?.message && (
        <span
          role="alert"
          className={`text-sm ${
            errMsg?.status === "failed"
              ? "text-[#f64949fe]"
              : "text-[#2ba150fe]"
          } mt-0.5`}
        >
          {errMsg?.message}
        </span>
      )}
      <div className="flex items-end justify-end pb-2">
        {loading ? (
          <Loading />
        ) : (
          <CustomButton
            title="Submit"
            type="submit"
            containerStyles="bg-[#0444a4] text-white py-1 px-3 rounded-full font-semifold text-sm"
          />
        )}
      </div>
    </form>
  );
};

export default CommentForm;
