import pygame
# from PIL import Image

# a = Image.open('image/santa.gif')

clock = pygame.time.Clock()

pygame.init()
screen = pygame.display.set_mode((750,422))
pygame.display.set_caption("Work Alexey and Olga together")
icon = pygame.image.load('image\pickachy.png')
pygame.display.set_icon(icon)


myfont = pygame.font.Font('Day_5/font/Borel-Regular.ttf',40) 
text_surface = myfont.render('itProger', False, 'Yellow')
bg  = pygame.image.load('Day_5/image/bk_ok.jpg')
bg_x = 0



santa_image = [pygame.image.load('Day_5/image/1.png').convert_alpha(),pygame.image.load('Day_5/image/2.png').convert_alpha()]
santa = pygame.image.load('Day_5/image/santa-claus.png')
santa_x = 200
santa_y = 250
santa_speed = 5
santa_animation = 0
is_jump = False
jump_count = 10

monster_timer = pygame.USEREVENT + 1
pygame.time.set_timer(monster_timer,4000)
monster_lst = []

herous_santa = pygame.image.load('Day_5/image/santa-claus.png').convert_alpha()

label = pygame.font.Font('Day_5/font/Borel-Regular.ttf', 40)
lose_label = label.render('You Lose!', False,(193,196,199))
restart_label = label.render('play again', False,(115,132,148))
restart_label_rec = restart_label.get_rect(topleft=(180,200))

bullets_left = 5
bullet = pygame.image.load('Day_5/image/poop.png')
bullets = []
gameplay = True


running = True

while running:
    
    screen.blit(bg,(bg_x, 0))
    screen.blit(bg,(bg_x + 750, 0))
    
    if gameplay:
    
        screen.blit(santa_image[santa_animation],(santa_x, santa_y))
    
        
        santa_rect = santa_image[0].get_rect(topleft=(santa_x,santa_y))
        # herous_santa_rec = herous_santa.get_rect(topleft=(750, 250))
        
        if monster_lst:
            for i,el in enumerate(monster_lst):
                screen.blit(herous_santa, el)
                el.x -= 10
                
                if el.x < -10:
                    monster_lst.pop(i)
                        
            
                if santa_rect.colliderect(el):
                    gameplay = False
        
        if santa_animation == 1:
            santa_animation = 0
        else:
            santa_animation +=1
        
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT] and santa_x > 50:
            santa_x -= santa_speed
        elif keys[pygame.K_RIGHT] and santa_x < 380:
            santa_x += santa_speed    
        
        if not is_jump:
            if keys[pygame.K_SPACE]:
                is_jump = True    
        else:
            if jump_count >= -10:
                if jump_count > 0:
                    santa_y -= (jump_count ** 2) // 2
                else:
                    santa_y += (jump_count ** 2) // 2     
                jump_count -= 1
            else:
                is_jump = False
                jump_count = 10       
        
        bg_x -= 2
        if bg_x == -618:
            bg_x = 0
            
            
   
        if bullets:
            for i,el in enumerate(bullets):
                screen.blit(bullet, (el.x, el.y))
                el.x += 4 
                
                if el.x > 750:
                    bullets.pop(i)
                    
                if monster_lst:
                    for (index, monster) in enumerate(monster_lst):
                        if el.colliderect(monster):
                            monster_lst.pop(index)
                            bullets.pop(i)
                               
                    
    else:
        screen.fill((87,88,89))
        screen.blit(lose_label,(180,100))
        screen.blit(restart_label,restart_label_rec)    
        
        mouse = pygame.mouse.get_pos()
        if restart_label_rec.collidepoint(mouse) and pygame.mouse.get_pressed()[0]:
            gameplay = True
            santa_x = 200
            monster_lst.clear()
            bullets.clear()
            bullets_left = 5    
        
    pygame.display.update()
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
            pygame.quit()
        if event.type == monster_timer:  
            monster_lst.append(herous_santa.get_rect(topleft = (780, 270))) 

        if gameplay and event.type == pygame.KEYUP and event.key == pygame.K_b and bullets_left > 0:
            bullets.append(bullet.get_rect(topleft=(santa_x + 30,santa_y + 10)))
            bullets_left -= 1
        
    clock.tick(10)