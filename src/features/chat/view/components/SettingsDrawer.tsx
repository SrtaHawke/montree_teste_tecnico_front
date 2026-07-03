import styled from "styled-components";
import { MonitorCog, Moon, Palette, Sun, UserRound, X } from "lucide-react";

import {
    AVAILABLE_ACCENT_THEMES,
    AVAILABLE_THEMES,
    ChatPreferences,
} from "../../model/chat.preferences";

interface SettingsDrawerProps {
    open: boolean;
    preferences: ChatPreferences;
    onChangePreferences: (preferences: Partial<ChatPreferences>) => void;
    onClose: () => void;
}

export function SettingsDrawer({
                                   open,
                                   preferences,
                                   onChangePreferences,
                                   onClose,
                               }: SettingsDrawerProps) {
    return (
        <Container $open={open}>
            <Content>
                <Header>
                    <div>
                        <Title>Configurações</Title>
                        <Description>Personalize sua experiência no Mini Chat.</Description>
                    </div>

                    <CloseButton type="button" onClick={onClose} aria-label="Fechar configurações">
                        <X size={18} />
                    </CloseButton>
                </Header>

                <Section>
                    <SectionTitle>
                        <UserRound size={16} />
                        Perfil
                    </SectionTitle>

                    <Input
                        placeholder="Seu nome"
                        value={preferences.username}
                        onChange={(event) =>
                            onChangePreferences({ username: event.target.value })
                        }
                    />
                </Section>

                <Section>
                    <SectionTitle>
                        <MonitorCog size={16} />
                        Aparência
                    </SectionTitle>

                    <OptionGrid>
                        {AVAILABLE_THEMES.map((themeMode) => (
                            <OptionButton
                                key={themeMode}
                                type="button"
                                $active={preferences.theme === themeMode}
                                onClick={() => onChangePreferences({ theme: themeMode })}
                            >
                                {themeMode === "dark" ? <Moon size={16} /> : <Sun size={16} />}
                                {themeMode === "dark" ? "Escuro" : "Claro"}
                            </OptionButton>
                        ))}
                    </OptionGrid>
                </Section>

                <Section>
                    <SectionTitle>
                        <Palette size={16} />
                        Cor principal
                    </SectionTitle>

                    <ColorGrid>
                        {AVAILABLE_ACCENT_THEMES.map((accent) => (
                            <ColorButton
                                key={accent.id}
                                type="button"
                                title={accent.name}
                                $color={accent.color}
                                $active={preferences.accentColor === accent.id}
                                onClick={() => onChangePreferences({ accentColor: accent.id })}
                            />
                        ))}
                    </ColorGrid>
                </Section>
            </Content>
        </Container>
    );
}

const Container = styled.aside<{ $open: boolean }>`
  width: ${({ $open }) => ($open ? "320px" : "0")};
  overflow: hidden;
  transition: width 0.25s ease;
  border-left: ${({ $open, theme }) =>
    $open ? `1px solid ${theme.colors.border}` : "0"};
  background: ${({ theme }) => theme.colors.surface};
`;

const Content = styled.div`
  width: 320px;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const CloseButton = styled.button`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.surfaceSoft};
  color: ${({ theme }) => theme.colors.muted};
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Description = styled.p`
  margin-top: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surfaceSoft};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
`;

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const OptionButton = styled.button<{ $active: boolean }>`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.surfaceSoft};
  color: ${({ $active, theme }) => ($active ? "#fff" : theme.colors.text)};
`;

const ColorGrid = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ColorButton = styled.button<{ $color: string; $active: boolean }>`
  width: 34px;
  height: 34px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $color }) => $color};
  outline: ${({ $active }) => ($active ? "3px solid rgba(255,255,255,.9)" : "0")};
  box-shadow: ${({ $active }) =>
    $active ? "0 0 0 2px rgba(88,101,242,.8)" : "none"};
`;