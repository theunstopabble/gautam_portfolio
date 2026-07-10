import type { LayoutDirection } from "@/components/diagrams/layout";

export interface DiagramData {
  nodeDefs: {
    id: string;
    data: { label: string; sublabel?: string };
    parentId?: string;
    isSubgraph?: boolean;
  }[];
  edgeDefs: { source: string; target: string }[];
  direction?: LayoutDirection;
}

import { swadkartArchitecture, swadkartArchitectureMobile } from "./swadkart-architecture";
import { swadkartWorkflow, swadkartWorkflowMobile } from "./swadkart-workflow";
import { swadkartDeployment, swadkartDeploymentMobile } from "./swadkart-deployment";
import { swadkartDbSchema, swadkartDbSchemaMobile } from "./swadkart-dbschema";

import { interviewmindsArchitecture } from "./interviewminds-architecture";
import { interviewmindsWorkflow } from "./interviewminds-workflow";
import { interviewmindsDeployment } from "./interviewminds-deployment";
import { interviewmindsDbSchema } from "./interviewminds-dbschema";

import { satarkAiArchitecture } from "./satark-ai-architecture";
import { satarkAiWorkflow } from "./satark-ai-workflow";
import { satarkAiDeployment } from "./satark-ai-deployment";
import { satarkAiDbSchema } from "./satark-ai-dbschema";

import { texfolioArchitecture } from "./texfolio-architecture";
import { texfolioWorkflow } from "./texfolio-workflow";
import { texfolioDeployment } from "./texfolio-deployment";
import { texfolioDbSchema } from "./texfolio-dbschema";

export interface ProjectDiagrams {
  architecture: DiagramData;
  workflow: DiagramData;
  deployment: DiagramData;
  dbSchema: DiagramData;
}

export interface ProjectDiagramsMobile {
  architecture?: DiagramData;
  workflow?: DiagramData;
  deployment?: DiagramData;
  dbSchema?: DiagramData;
}

const baseDiagrams: Record<string, ProjectDiagrams> = {
  interviewminds: {
    architecture: interviewmindsArchitecture,
    workflow: interviewmindsWorkflow,
    deployment: interviewmindsDeployment,
    dbSchema: interviewmindsDbSchema,
  },
  "satark-ai": {
    architecture: satarkAiArchitecture,
    workflow: satarkAiWorkflow,
    deployment: satarkAiDeployment,
    dbSchema: satarkAiDbSchema,
  },
  texfolio: {
    architecture: texfolioArchitecture,
    workflow: texfolioWorkflow,
    deployment: texfolioDeployment,
    dbSchema: texfolioDbSchema,
  },
  swadkart: {
    architecture: swadkartArchitecture,
    workflow: swadkartWorkflow,
    deployment: swadkartDeployment,
    dbSchema: swadkartDbSchema,
  },
};

const mobileDiagrams: Record<string, ProjectDiagramsMobile> = {
  swadkart: {
    architecture: swadkartArchitectureMobile,
    workflow: swadkartWorkflowMobile,
    deployment: swadkartDeploymentMobile,
    dbSchema: swadkartDbSchemaMobile,
  },
};

export const projectDiagrams = baseDiagrams;
export const projectDiagramsMobile = mobileDiagrams;
