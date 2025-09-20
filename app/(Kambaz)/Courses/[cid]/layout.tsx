import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: { id: string } }>) {
  //const { cid } = await params;
  const { id: cid } = params;
  //<h2>Courses {cid}</h2>
  return (
    <div id="wd-courses">
      <h2>Courses {cid}</h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200">
              {" "}
              <CourseNavigation />{" "}
            </td>
            <td valign="top" width="100%">
              {" "}
              {children}{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
