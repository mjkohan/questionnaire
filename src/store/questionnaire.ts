import { create } from 'zustand'

interface State {
    currentStep: number
    answers: Record<number, string | number>
    setAnswer: (id: number, value: string | number) => void
    goTo: (step: number) => void
    next: () => void
    prev: () => void
    reset: () => void
}

export const useQuestionnaireStore = create<State>((set) => ({
    currentStep: -1,
    answers: {},
    setAnswer: (id, value) => set((state) => ({
        answers: { ...state.answers, [id]: value },
    })),
    goTo: (step) => set(() => ({ currentStep: step })),
    next: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    prev: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 0) })),
    reset: () => set(() => ({ currentStep: 0, answers: {} })),
}))