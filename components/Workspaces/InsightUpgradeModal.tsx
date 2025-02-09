import { ReactNode } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { usePostHog } from "posthog-js/react";
import { useEffectOnce } from "react-use";
import { Dialog, DialogTitle, DialogContent, DialogCloseButton } from "components/molecules/Dialog/dialog";
import Button from "components/atoms/Button/button";
import Card from "components/atoms/Card/card";

type InsightUpgradeModalProps = {
  workspaceId: string;
  overLimit?: number;
  variant: "repositories" | "contributors" | "workspace";
  isOpen: boolean;
  onClose: () => void;
};

export default function InsightUpgradeModal({
  workspaceId,
  overLimit,
  variant,
  isOpen,
  onClose,
}: InsightUpgradeModalProps) {
  const posthog = usePostHog();

  useEffectOnce(() => {
    posthog.capture("clicked: Upgrade Workspace Modal", { workspaceId });
  });

  return (
    <Dialog open={isOpen}>
      <DialogContent autoStyle={false} onEscapeKeyDown={onClose} onPointerDownOutside={onClose}>
        <Card className="p-8 max-w-4xl">
          <div className="min-w-[712px] flex flex-col gap-8">
            <DialogCloseButton onClick={onClose} />
            <section className="flex flex-col gap-2">
              <DialogTitle className="text-xl">
                {variant !== "workspace"
                  ? "This Insight page is over the free Workspace limit"
                  : "Upgrade to a PRO Workspace"}
              </DialogTitle>
              {variant !== "workspace" ? (
                <p className="text-sm text-slate-500">
                  Your Insight page has{" "}
                  <span className="font-bold">
                    {overLimit} {variant}
                  </span>{" "}
                  but the free Workspace only allows for{" "}
                  <span className="font-bold">
                    {variant === "repositories" ? 100 : 10} {variant}
                  </span>{" "}
                  tracked. Don&apos;t worry, your insights won&apos;t be deleted. If you want to continue using
                  OpenSauced you should upgrade your Workspace to a PRO Account.
                </p>
              ) : (
                <p className="text-sm text-slate-500">
                  Setting your workspace to private is a PRO feature. Upgrade your Workspace and get exclusive access to
                  your work for you and your team!
                </p>
              )}
            </section>

            <section className="flex gap-8 justify-between w-full">
              <Card className="basis-1/2 px-6 py-6 flex flex-col gap-6 justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-lg font-semibold">Free Workspace</h3>
                    <p className="text-sm text-slate-500">Ideal for individuals</p>
                  </div>

                  <p className="text-4xl font-semibold">
                    <span className="text-lg">$</span>0<span className="text-2xl text-slate-500">/mth</span>
                  </p>
                </div>

                <ul className="flex flex-col gap-3">
                  <ChecklistItem color="orange">Public only Workspaces</ChecklistItem>
                  <ChecklistItem color="orange">
                    Up to <span className="font-bold">10</span> contributors per insight page
                  </ChecklistItem>
                  <ChecklistItem color="orange">
                    Up to <span className="font-bold">100</span> repositories per insight page
                  </ChecklistItem>
                </ul>

                <Button
                  variant="default"
                  className="flex w-full py-3 justify-center !border !border-orange-600 !text-orange-600"
                >
                  Your Plan
                </Button>
              </Card>

              <Card className="basis-1/2 px-6 py-6 flex flex-col gap-6 justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-lg font-semibold">Pro Workspace</h3>
                    <p className="text-sm text-slate-500">Ideal for teams </p>
                  </div>

                  <div className="flex flex-col gap-0.5 items-end">
                    <p className="text-4xl font-semibold">
                      <span className="text-xl">$</span>100<span className="text-2xl text-slate-500">/mth</span>
                    </p>
                    <p className="text-xs font-semibold text-slate-500">charged per Workspace</p>
                  </div>
                </div>

                <ul className="flex flex-col gap-3">
                  <ChecklistItem color="green">Private or public Workspaces, you choose!</ChecklistItem>
                  <ChecklistItem color="green">
                    Up to <span className="font-bold">100</span> contributors per insight page
                  </ChecklistItem>
                  <ChecklistItem color="green">
                    Up to <span className="font-bold">1,000</span> repositories per insight page
                  </ChecklistItem>
                </ul>

                <Button
                  onClick={() => {
                    if (variant === "workspace") onClose();
                  }}
                  href={variant !== "workspace" ? `/workspaces/${workspaceId}/settings#upgrade` : ""}
                  variant="primary"
                  className="py-3 flex justify-center"
                >
                  Upgrade
                </Button>
              </Card>
            </section>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

function ChecklistItem({ color, children }: { color: "orange" | "green"; children: ReactNode }) {
  return (
    <li className="flex gap-3 items-center">
      <FaRegCheckCircle className={`w-5 h-5 text-${color}-500`} />
      <p className="text-sm text-slate-500">{children}</p>
    </li>
  );
}
