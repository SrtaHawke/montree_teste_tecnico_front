import { FormEvent } from "react";
import styled from "styled-components";

interface ChatComposerProps {
    value: string;
    disabled: boolean;
    canSend: boolean;
    onChange: (value: string) => void;
    onSend: () => void;
}

export function ChatComposer({
                                 value,
                                 disabled,
                                 canSend,
                                 onChange,
                                 onSend,
                             }: ChatComposerProps) {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSend();
    }

    return (
        <ComposerForm onSubmit={handleSubmit}>
            <InputWrapper>
                <Input
                    value={value}
                    disabled={disabled}
                    placeholder="Digite sua mensagem..."
                    onChange={(event) => onChange(event.target.value)}
                />
            </InputWrapper>

            <SendButton type="submit" disabled={!canSend}>
                Enviar
            </SendButton>
        </ComposerForm>
    );
}

const ComposerForm = styled.form`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.full};
  outline: none;
  background: ${({ theme }) => theme.colors.surfaceSoft};
  box-shadow: ${({ theme }) => theme.shadow.input};
  transition: border-color 0.2s ease, background 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
  }

  &:disabled {
    opacity: 0.7;
  }
`;

const SendButton = styled.button`
  height: 48px;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.sentBubble};
  color: white;
  font-weight: 700;
  box-shadow: ${({ theme }) => theme.shadow.input};
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;