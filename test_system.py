import cv2
import numpy as np
from model import HumanSegmentator
from background_editor import BackgroundEditor

def quick_test():
    print("🧪 ЗАПУСК БЫСТРОГО ТЕСТА...")
    
    # 1. Тест редактора фонов
    print("1. Тестируем редактор фонов...")
    editor = BackgroundEditor()
    
    # Создаем тестовый фон
    test_bg = np.random.randint(0, 255, (300, 400, 3), dtype=np.uint8)
    
    # Применяем эффекты
    effects = {
        'brightness': 1.2,
        'contrast': 1.3, 
        'hue': 15,
        'blur': 2,
        'preset': 'dion_blue'
    }
    
    edited_bg = editor.apply_effects(test_bg, effects)
    cv2.imwrite("test_original_bg.jpg", test_bg)
    cv2.imwrite("test_edited_bg.jpg", edited_bg)
    print("   ✅ Редактор фонов работает")
    
    # 2. Тест сегментации
    print("2. Тестируем сегментацию...")
    segmentator = HumanSegmentator()
    
    # Создаем тестовое изображение с человеком
    test_img = np.ones((400, 300, 3), dtype=np.uint8) * 255
    cv2.rectangle(test_img, (80, 50), (220, 350), (100, 100, 100), -1)  # Силуэт
    
    # Обрабатываем с эффектами
    mask, result = segmentator.process_image(
        test_img, 
        background_type="gradient",
        effects={'brightness': 1.1, 'preset': 'dion_modern'}
    )
    
    cv2.imwrite("test_input.jpg", test_img)
    cv2.imwrite("test_mask.jpg", mask)
    cv2.imwrite("test_result.jpg", cv2.cvtColor(result, cv2.COLOR_RGB2BGR))
    print("   ✅ Сегментация работает")
    
    print("\n🎉 ТЕСТ ПРОЙДЕН! Проверь файлы:")
    print("   - test_original_bg.jpg - исходный фон")
    print("   - test_edited_bg.jpg - отредактированный фон") 
    print("   - test_input.jpg - входное изображение")
    print("   - test_mask.jpg - маска сегментации")
    print("   - test_result.jpg - финальный результат")

if __name__ == "__main__":
    quick_test()