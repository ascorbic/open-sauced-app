import { ComponentProps, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSearchContributors } from "lib/hooks/useSearchContributors";
import { useGetTrackedRepositories } from "lib/hooks/api/useGetTrackedRepositories";
import { useGetRepoContributors } from "lib/hooks/api/useGetRepositoryContributors";
import { SearchedContributorsTable } from "../SearchedContributorsTable";
import { TrackedContributorsWizardLayout } from "./TrackedContributorsWizardLayout";

import { PickContributorStep } from "./PickContributorStep";
import { SearchByContributorsStep } from "./SearchByContributorsStep";
import { PasteContributorsStep } from "./PasteContributorsStep";
import { FilterPastedContributorsStep } from "./FilterPastedContributorsStep";
import { TrackedRepositoriesContributorsStep } from "./TrackedRepositoriesContributorsStep";

interface TrackedContributorsWizardProps {
  onAddToTrackingList: (contributors: Map<string, boolean>) => void;
  onCancel: () => void;
}

export type TrackedContributorsStep =
  | "pickOption"
  | "pickContributors"
  | "pasteContributors"
  | "pickRepos"
  | "filterPastedContributors"
  | "pickReposContributors";

export const TrackedContributorsWizard = ({ onAddToTrackingList, onCancel }: TrackedContributorsWizardProps) => {
  const [step, setStep] = useState<TrackedContributorsStep>("pickOption");
  const [currentTrackedContributors, setCurrentTrackedContributors] = useState<Map<string, boolean>>(new Map());
  const suggestedContributors: any[] = [];
  const [repoSearchTerm, setRepoSearchTerm] = useState<string | undefined>();
  const [repositoriesForContributors, setRepositoriesForContributors] = useState<Map<string, boolean>>(new Map());
  const [contributorsFromRepos, setContributorsFromRepos] = useState<Map<string, boolean>>(new Map());
  const router = useRouter();
  const workspaceId = router.query.workspaceId as string;
  const {
    data: rawRepositories,
    isError: isRepoError,
    isLoading: IsRepoLoading,
    // TODO: a search term will help with returning everything
  } = useGetTrackedRepositories({ workspaceId, limit: 6000 });
  const {
    data: rawContributorsFromRepos,
    isError: isContributorsFromReposError,
    isLoading: isContributorsFromReposLoading,
  } = useGetRepoContributors({
    repositories: Array.from(repositoriesForContributors.keys()),
    limit: 1000,
    range: 90,
  });
  const contributorsFromReposData = new Map<string, boolean>(
    rawContributorsFromRepos?.map((contributor) => [contributor, true])
  );

  useEffect(() => {
    const repositories =
      rawRepositories
        ?.filter(({ repo }) => !repoSearchTerm || repo.full_name.includes(repoSearchTerm))
        .map(({ repo }) => repo.full_name) ?? [];
    const updates = new Map(repositories.map((repo) => [repo, false]));

    setRepositoriesForContributors(updates);
  }, [rawRepositories, repoSearchTerm]);

  const onToggleRepo = (repo: string, isSelected: boolean) => {
    setRepositoriesForContributors((currentTrackedRepositories) => {
      const updates = new Map(currentTrackedRepositories);
      updates.set(repo, isSelected);

      return updates;
    });
  };

  const onSelectRepo = (repo: string) => {
    onToggleRepo(repo, true);
  };

  const onToggleAllRepos = (checked: boolean) => {
    setRepoSearchTerm(undefined);
    setRepositoriesForContributors((currentRepositories) => {
      const updates = new Map(currentRepositories);

      for (const [repo] of updates) {
        updates.set(repo, checked);
      }

      return updates;
    });
  };

  const onSearchRepos = (searchTerm?: string) => {
    if (searchTerm && searchTerm.length > 2) {
      setRepoSearchTerm(searchTerm);
    } else {
      setRepoSearchTerm(undefined);
    }
  };

  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  const { data, isError, isLoading } = useSearchContributors(searchTerm);

  const onToggleContributor = (contributor: string, isSelected: boolean) => {
    setSearchTerm(undefined);

    setCurrentTrackedContributors((currentTrackedContributors) => {
      const updates = new Map(currentTrackedContributors);
      updates.set(contributor, isSelected);

      return updates;
    });
  };

  const onSelectContributor = (contributor: string) => {
    onToggleContributor(contributor, true);
  };

  const onToggleAllContributors = (checked: boolean) => {
    setCurrentTrackedContributors((currentTrackedContributors) => {
      const updates = new Map(currentTrackedContributors);

      for (const [contributor] of updates) {
        updates.set(contributor, checked);
      }

      return updates;
    });
  };

  const onBulkAddContributors = (contributors: string[]) => {
    for (const contributor of contributors) {
      onToggleContributor(contributor, true);
    }
    setStep("filterPastedContributors");
  };

  const onFilterContributorsFromRepos = (filterTerm: string) => {};

  const onToggleRepoContributor = (contributor: string, isSelected: boolean) => {
    setContributorsFromRepos((currentContributors) => {
      const updates = new Map(currentContributors);
      updates.set(contributor, isSelected);

      return updates;
    });
  };

  const onToggleAllReposContributors = (checked: boolean) => {
    setContributorsFromRepos((currentContributors) => {
      const updates = new Map(currentContributors);

      for (const [contributor] of updates) {
        updates.set(contributor, checked);
      }

      return updates;
    });
  };

  let searchedContributors = data ?? [];

  function goBack() {
    switch (step) {
      case "pickOption":
        onCancel();
        break;
      case "filterPastedContributors":
        setStep("pasteContributors");
        break;
      case "pickContributors":
        setStep("pickOption");
        break;
      case "pickReposContributors":
        setStep("pickRepos");
        break;
      default:
        setStep("pickOption");
        break;
    }
  }

  function onSearchContributors(searchTerm?: string) {
    if (searchTerm && searchTerm.length > 2) {
      setSearchTerm(searchTerm);
    } else {
      setSearchTerm(undefined);
    }
  }

  const contributors = currentTrackedContributors;
  let stepData: ComponentProps<typeof TrackedContributorsWizardLayout>["stepData"] =
    step === "pickRepos"
      ? {
          step,
          repositoriesCount: [...repositoriesForContributors.values()].filter(Boolean).length,
        }
      : undefined;

  const renderStep = (step: TrackedContributorsStep) => {
    switch (step) {
      case "pickOption":
        return (
          <PickContributorStep
            onSearchContributors={() => {
              setStep("pickContributors");
            }}
            onPasteContributors={() => {
              setStep("pasteContributors");
            }}
            onSearchContributorsByRepo={() => {
              setStep("pickRepos");
            }}
          />
        );

      case "pickContributors":
        return (
          <SearchByContributorsStep
            onSelectContributor={onSelectContributor}
            onToggleContributor={onToggleContributor}
            onToggleAllContributors={onToggleAllContributors}
            onSearch={onSearchContributors}
            contributors={contributors}
            searchedContributors={searchedContributors}
            suggestedContributors={suggestedContributors}
          />
        );

      case "pasteContributors":
        return <PasteContributorsStep onBulkAddContributors={onBulkAddContributors} />;

      case "filterPastedContributors":
        return (
          <FilterPastedContributorsStep
            contributors={trackedContributors}
            onToggleContributor={onToggleContributor}
            onToggleAllContributors={onToggleAllContributors}
          />
        );

      case "pickRepos":
        return (
          <TrackedRepositoriesContributorsStep
            onNext={() => {
              setStep("pickReposContributors");
            }}
            onSelectRepo={onSelectRepo}
            onToggleRepo={onToggleRepo}
            onToggleAllRepos={onToggleAllRepos}
            onSelectContributor={onSelectContributor}
            onToggleContributor={onToggleContributor}
            onToggleAllContributors={onToggleAllContributors}
            repositories={repositoriesForContributors}
          />
        );

      case "pickReposContributors":
        return (
          <SearchedContributorsTable
            type="by-contributors"
            contributors={contributorsFromReposData}
            onFilter={onFilterContributorsFromRepos}
            onToggleContributor={onToggleRepoContributor}
            onToggleAllContributors={onToggleAllReposContributors}
          />
        );

      default:
        return null;
    }
  };

  const trackedContributors = new Map(currentTrackedContributors);

  trackedContributors.forEach((isSelected, contributor, map) => {
    if (!isSelected) {
      map.delete(contributor);
    }
  });

  return (
    <TrackedContributorsWizardLayout
      onAddToTrackingList={() => {
        onAddToTrackingList(currentTrackedContributors);
      }}
      stepData={stepData}
      trackedContributorsCount={trackedContributors.size}
      onCancel={() => {
        goBack();
      }}
    >
      {renderStep(step)}
    </TrackedContributorsWizardLayout>
  );
};
