"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation( { cid }: { cid: string }) {
  const pathname = usePathname();
  const links = [
    { label: "Home", path: "Home", id: "wd-course-home-link" },
    { label: "Modules", path: "Modules", id: "wd-course-modules-link" },
    { label: "Piazza", path: "Piazza", id: "wd-course-piazza-link" },
    { label: "Zoom", path: "Zoom", id: "wd-course-zoom-link" },
    { label: "Assignments", path: "Assignments", id: "wd-course-assignments-link" },
    { label: "Quizzes", path: "Quizzes", id: "wd-course-quizzes-link" },
    { label: "Grades", path: "Grades", id: "wd-course-grades-link" },
    { label: "People", path: "People/Table", id: "wd-course-people-link" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(({ label, path, id }) => {
        const fullPath = `/Courses/${encodeURIComponent(cid)}/${path}`;
        const isActive = pathname === fullPath;

        return (
          <Link
            key={id}
            href={fullPath}
            id={id}
            className={`list-group-item border-0 ${isActive ? "active" : "text-danger"}`}
          >
            {label}
          </Link>
        );
      })}
    </div>
);}

/*
<div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link href="/Courses/1234/Home" id="wd-course-home-link"
        className="list-group-item active border-0"> 
        Home 
        </Link><br />
      <Link href="/Courses/1234/Modules" id="wd-course-modules-link"
        className="list-group-item text-danger border-0"> Modules </Link><br />
      <Link href="/Courses/1234/Piazza" id="wd-course-piazza-link"
        className="list-group-item text-danger border-0"> Piazza </Link><br />
      <Link href="/Courses/1234/Zoom" id="wd-course-zoom-link"
        className="list-group-item text-danger border-0"> Zoom </Link><br />
      <Link href="/Courses/1234/Assignments" id="wd-course-assignments-link"
        className="list-group-item text-danger border-0"> Assignments </Link><br />
      <Link href="/Courses/1234/Quizzes" id="wd-course-quizzes-link"
        className="list-group-item text-danger border-0"> Quizzes </Link><br />
      <Link href="/Courses/1234/People/Table" id="wd-course-people-link"
        className="list-group-item text-danger border-0" > People </Link><br />
    </div>
*/
/*<ListGroup id="wd-course-navigation" style={{width: 120}}
         className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroupItem key={link.path} as={Link} href={link.path}
          className={`list-group-item text-danger border-0
              ${pathname.includes(link.label) ? "list-group-item text-danger border-0" : "list-group-item active border-0"}`}>
          <br />
          {link.label}
        </ListGroupItem>
      ))}
    </ListGroup> */