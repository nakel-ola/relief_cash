import { ProjectLayout } from "@/features/projects/layout";
import { useFetchProject } from "@/hooks/useFetchProject";
import { useSignIn } from "@/hooks/useSignIn";
import Head from "next/head";
import { useParams } from "next/navigation";
import React, { Fragment } from "react";

export default function Project() {
  const params = useParams<{ projectId: string }>();

  const { isLoading, project } = useFetchProject(params?.projectId);

  useSignIn(params?.projectId);

  return (
    <Fragment>
      <Head>
        <title>Project {project && ` | ${project.name}`}</title>
      </Head>

      <ProjectLayout
        isData={!!project}
        isLoading={isLoading}
        members={project?.members ?? []}
        projectId={params?.projectId}
      ></ProjectLayout>
    </Fragment>
  );
}