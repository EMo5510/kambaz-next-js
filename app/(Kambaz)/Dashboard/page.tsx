import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/CS_code.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS1200 Fundies </h5>
              <p className="wd-dashboard-course-title">
                backend developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/cs.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS 3650 Systems </h5>
              <p className="wd-dashboard-course-title">
                Security Analyst
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/systems.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS3000 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                CS Researcher
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/algo.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS3500 Object-Oriented Design </h5>
              <p className="wd-dashboard-course-title">
                Software engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/cs2.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS1000 Intro to CS </h5>
              <p className="wd-dashboard-course-title">
                Student
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/cs3.jpg"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS1100 Intro to Programming </h5>
              <p className="wd-dashboard-course-title">
                Programmer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
