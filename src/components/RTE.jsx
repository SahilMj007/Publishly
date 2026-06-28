import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey="l80idlgqsr0ui1oifymu2cnqgp0vhbrx5lfqudissly9v21k"
              initialValue={defaultValue}
              init={{
                branding: false,
                height: 500,
                menubar: true,
                skin: "oxide",
                content_style: `
                  body {
                    font-family: Inter, Arial, sans-serif;
                    font-size: 15px;
                    line-height: 1.7;
                    padding: 16px;
                    color: #1e293b;
                  }
                `,
                plugins: [
                  "advlist",
                  "anchor",
                  "autolink",
                  "charmap",
                  "code",
                  "fullscreen",
                  "help",
                  "image",
                  "insertdatetime",
                  "link",
                  "lists",
                  "media",
                  "preview",
                  "searchreplace",
                  "table",
                  "visualblocks",
                ],
                toolbar:
                  "undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image table | code fullscreen preview",
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  );
};

export default RTE;
